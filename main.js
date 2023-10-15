"use strict";

const apiGhibli = fetch("https://ghibliapi.vercel.app/films")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((film, i) => {
      const containerCards = document.querySelector(".container-cards");
      const templateCard = `<div class="pt-4 col-lg-4 col-md-6 col-sm-12">
                              <div class="card text-center">
                                <img
                                  src="${film.movie_banner}"
                                  class="card-img-top"
                                  alt="..."
                                />
                                <div class="card-body">
                                  <h2 class="card-title">${film.title}</h2>
                                  <p class="card-description">${film.description}</p>
                                  <button
                                    type="button"
                                    class="btn btn-style"
                                    id="film${i}"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    Ver más
                                  </button>
                                </div>
                              </div>
                            </div>`;

      containerCards.insertAdjacentHTML("beforeend", templateCard);

      const btnVerMas = document.querySelector(`#film${i}`);
      btnVerMas.addEventListener("click", () => {
        const modalImg = document.querySelector(".modal-img > img");
        modalImg.src = film.image;
        const modalTitle = document.querySelector(".modal-title");
        modalTitle.innerHTML = film.title;
        const modalDato1 = document.querySelector(".modal-dato1");
        modalDato1.innerHTML = film.director;
        const modalDato2 = document.querySelector(".modal-dato2");
        modalDato2.innerHTML = film.release_date;
        const modalDato3 = document.querySelector(".modal-dato3");
        modalDato3.innerHTML = film.running_time;
      });
    });
    return data;
  });
