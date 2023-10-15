"use strict";

const apiGhibli = fetch("https://ghibliapi.vercel.app/films")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((film) => {
      console.log(film.title, film.description);
      const containerCards = document.querySelector(".container-cards");
      const templateCard = `<div class="pt-4 col-lg-4 col-md-6 col-sm-12">
                              <div class="card text-center">
                                <img
                                  src="https://img.freepik.com/foto-gratis/gato-blanco-encuentra-rodillas-mujer_8353-539.jpg?w=1380&t=st=1697330825~exp=1697331425~hmac=8a774e2fbee7f40bbcf280e81f635fbe294f664acd282421c0c60625eb7ddf29"
                                  class="card-img-top"
                                  alt="..."
                                />
                                <div class="card-body">
                                  <h2 class="card-title">${film.title}</h2>
                                  <p class="card-description">${film.description}</p>
                                  <button
                                    type="button"
                                    class="btn btn-style"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    Ver más
                                  </button>
                                </div>
                              </div>
                            </div>`;

      containerCards.insertAdjacentHTML("beforeend", templateCard);
    });
  });
