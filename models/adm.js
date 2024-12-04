// Importando funções do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';

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

// Inicializando o Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para carregar os produtos
const tabelaProdutos = document.getElementById('tbody-produtos');
async function carregarProdutos() {
  const querySnapshot = await getDocs(collection(db, 'produtos'));
  tabelaProdutos.innerHTML = '';  // Limpar tabela antes de adicionar novos produtos
  
  querySnapshot.forEach((doc) => {
    const produto = doc.data();
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.preco}</td>
      <td>${produto.areaId}</td>
      <td>${produto.descricao}</td>
      <td><button onclick="removerProduto('${doc.id}')">Remover</button></td>
    `;

    tabelaProdutos.appendChild(tr);
  });
}

carregarProdutos();  // Carregar os produtos ao carregar a página

// Função para remover o produto
async function removerProduto(produtoId) {
  try {
    await deleteDoc(doc(db, 'produtos', produtoId));
    console.log('Produto removido');
    carregarProdutos();  // Atualiza a lista de produtos
  } catch (e) {
    console.error("Erro ao remover produto: ", e);
  }
}

// Função para adicionar o produto
const formProduto = document.getElementById('form-produto');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', async (event) => {
  event.preventDefault();  // Previne o envio do formulário

  const nome = document.getElementById('product-name').value;
  const preco = document.getElementById('product-price').value;
  const areaId = document.getElementById('area_id').value;
  const descricao = document.getElementById('descricao').value;

  // Verifica se todos os campos foram preenchidos
  if (!nome || !preco || !areaId || !descricao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Adicionando o produto no Firebase
  try {
    const docRef = await addDoc(collection(db, 'produtos'), {
      nome: nome,
      preco: preco,
      areaId: areaId,
      descricao: descricao
    });
    console.log('Produto adicionado com ID: ', docRef.id);

    // Limpar o formulário após adicionar
    formProduto.reset();
    carregarProdutos();  // Atualiza a lista de produtos
  } catch (e) {
    console.error("Erro ao adicionar produto: ", e);
  }
});
