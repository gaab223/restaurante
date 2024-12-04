import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBi1O-RwlnJr65pfzXBhDktWqWHx0d0aG4",
    authDomain: "arabe-a94cf.firebaseapp.com",
    projectId: "arabe-a94cf",
    storageBucket: "arabe-a94cf.firebasestorage.app",
    messagingSenderId: "1055492362563",
    appId: "1:1055492362563:web:b97136b9e66b9a86679ff6",
    measurementId: "G-YKLPMFLJ7G"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Selecionando elementos da página
const formProduto = document.getElementById('form-produto');
const tabelaProdutos = document.getElementById('tabela-produtos');
const tbodyProdutos = document.getElementById('tbody-produtos');
const btnAdicionar = document.getElementById('btn-adicionar');
const btnAtualizar = document.getElementById('btn-atualizar');
const btnRemover = document.getElementById('btn-remover');

// Carregar produtos do Firestore
async function carregarProdutos() {
    const querySnapshot = await getDocs(collection(db, 'produtos'));
    tbodyProdutos.innerHTML = '';  // Limpa a tabela antes de adicionar novos produtos
    
    querySnapshot.forEach((doc) => {
        const produto = doc.data();
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.areaId}</td>
            <td>${produto.descricao}</td>
            <td>
                <button class="btn-atualizar" data-id="${doc.id}">Atualizar</button>
                <button class="btn-remover" data-id="${doc.id}">Remover</button>
            </td>
        `;
        tbodyProdutos.appendChild(tr);
    });
}

// Adicionar produto ao Firestore
async function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const areaId = document.getElementById('area_id').value;
    const descricao = document.getElementById('descricao').value;

    try {
        await addDoc(collection(db, 'produtos'), {
            nome,
            preco,
            areaId,
            descricao
        });
        carregarProdutos();  // Atualiza a tabela após adicionar
        formProduto.reset();  // Limpa o formulário
    } catch (e) {
        console.error("Erro ao adicionar produto: ", e);
    }
}

// Atualizar produto no Firestore
async function atualizarProduto(id) {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const areaId = document.getElementById('area_id').value;
    const descricao = document.getElementById('descricao').value;

    const produtoRef = doc(db, 'produtos', id);
    try {
        await updateDoc(produtoRef, {
            nome,
            preco,
            areaId,
            descricao
        });
        carregarProdutos();  // Atualiza a tabela após atualizar
    } catch (e) {
        console.error("Erro ao atualizar produto: ", e);
    }
}

// Remover produto do Firestore
async function removerProduto(id) {
    try {
        await deleteDoc(doc(db, 'produtos', id));
        carregarProdutos();  // Atualiza a tabela após remover
    } catch (e) {
        console.error("Erro ao remover produto: ", e);
    }
}

// Eventos dos botões
btnAdicionar.addEventListener('click', adicionarProduto);

// Funções para atualizar e remover produtos com base no id
tbodyProdutos.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-atualizar')) {
        const id = event.target.getAttribute('data-id');
        atualizarProduto(id);  // Chama a função para atualizar o produto
    }

    if (event.target.classList.contains('btn-remover')) {
        const id = event.target.getAttribute('data-id');
        removerProduto(id);  // Chama a função para remover o produto
    }
});

// Carregar os produtos quando a página for carregada
carregarProdutos();
