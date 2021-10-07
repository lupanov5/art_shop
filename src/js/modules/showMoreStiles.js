import { getResourse } from "../services/requests";

const showMoreStiles = (wrapper, trigger) => {
    const cards = document.querySelectorAll(wrapper),
          btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResourse('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();    
    });

    function createCards(response) {
        response.forEach(({src, name, link}) => {
            let card = document.createElement('div');

            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="styles">
                    <h4>${name}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

    
};

export default showMoreStiles;