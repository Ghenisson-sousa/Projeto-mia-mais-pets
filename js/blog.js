// Array de posts
const posts = [
  {
    id: 1,
    title: "5 Dicas para Passear com Seu Cachorro em Segurança",
    summary: "Descubra como tornar os passeios mais divertidos e seguros para o seu melhor amigo.",
    image: "images/blog1.jpg",
    content: `
      <p>Passear com seu cachorro é essencial para saúde e bem-estar dele. Aqui vão algumas dicas:</p>
      <ul>
        <li>Use sempre coleira adequada.</li>
        <li>Escolha horários menos quentes.</li>
        <li>Leve água para hidratação.</li>
        <li>Evite locais com muitos cães desconhecidos.</li>
        <li>Esteja atento à saúde do seu pet durante o passeio.</li>
      </ul>
      <p>Seguindo essas dicas, os passeios serão mais seguros e prazerosos!</p>
    `,
    date: "2025-08-19"
  },
  {
    id: 2,
    title: "Banho e Tosa: Mais do que Estética",
    summary: "Entenda por que o cuidado regular é essencial para a saúde e bem-estar do seu pet.",
    image: "images/blog2.jpg",
    content: `
      <p>Banho e tosa não servem apenas para deixar seu pet bonito, mas também para:</p>
      <ul>
        <li>Evitar problemas de pele.</li>
        <li>Reduzir a proliferação de parasitas.</li>
        <li>Manter unhas e pelos em ordem.</li>
        <li>Detectar precocemente doenças ou ferimentos.</li>
      </ul>
      <p>Por isso, mantenha a rotina de cuidados com higiene e estética do seu pet.</p>
    `,
    date: "2025-08-18"
  },
  {
    id: 3,
    title: "Como Escolher o Pet Sitter Ideal",
    summary: "Veja os principais pontos para garantir que seu pet esteja sempre em boas mãos.",
    image: "images/blog3.jpg",
    content: `
      <p>Escolher um pet sitter exige atenção aos detalhes:</p>
      <ul>
        <li>Verifique referências e experiências anteriores.</li>
        <li>Observe como ele interage com o seu pet.</li>
        <li>Certifique-se de que seguirá suas instruções de cuidado.</li>
        <li>Confira disponibilidade e flexibilidade de horários.</li>
      </ul>
      <p>Um bom pet sitter garante tranquilidade para você e segurança para seu animalzinho.</p>
    `,
    date: "2025-08-17"
  }
];

// Função para renderizar cards na página de listagem
function renderBlogPosts() {
  const container = document.querySelector(".blog-cards");
  if (!container) return;

  container.innerHTML = ""; // Limpa conteúdo existente

  posts.forEach(post => {
    const card = document.createElement("article");
    card.classList.add("blog-card");

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a href="single-blog.html?id=${post.id}" class="read-more">Ler Mais</a>
    `;

    container.appendChild(card);
  });
}

// Função para renderizar um post único na página single
function renderSinglePost() {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = posts.find(p => p.id == postId);
  const container = document.querySelector(".single-post-container");

  if (!post || !container) {
    container.innerHTML = "<p>Post não encontrado.</p>";
    return;
  }

  container.innerHTML = `
    <h1>${post.title}</h1>
    <p class="post-date">${post.date}</p>
    <img src="${post.image}" alt="${post.title}">
    <div class="post-content">${post.content}</div>
    <a href="blog.html" class="back-btn">← Voltar para Blog</a>
  `;
}

// Executar renderização conforme a página
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".blog-cards")) {
    renderBlogPosts();
  }

  if (document.querySelector(".single-post-container")) {
    renderSinglePost();
  }
});
