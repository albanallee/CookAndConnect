<template>
    <div class="body-wrapper">
        <button>Telecharger l'application</button>
        <div class="description">
            <p>
                Créez des recettes par jour, Les cuisiniers auront <strong>les étapes de la recette sur la tablette</strong>.
                Modifiez en temps réel vos recettes. 
            </p>
            <p>
                L'application Cook&connect va s'occuper de vos <strong>stocks</strong>. Elle peut même vous proposer 
                une <strong>liste de courses</strong> permanente et simple d'utilisation.
            </p>
        </div>
        <div class="catch-phrase container">
            <h2>L'application indespensable dans les cuisines</h2>
        </div>
        <div class="image-wrapper">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="dashboard-img" :src="require('@/assets/slide1.png')" />
                    </div>
                    <div class="carousel-item">
                        <img class="dashboard-img" :src="require('@/assets/slide2.png')" />
                    </div>
                    <div class="carousel-item">
                        <img class="dashboard-img" :src="require('@/assets/slide3.png')" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
$("button").on("click", function() {
    $("p").css("opacity", 0);
});
export default {
    name: 'Carousel',
    data () {
        return {

        }
    }
}
</script>

<style lang="less">
button {
    margin: 2rem;
	cursor: pointer;
	appearance: none;
	border-radius: 4px;
	font-size: 1.25rem;
	padding: 0.75rem 1rem;
	border: 1px solid #212121;
	background-color: #fff;
	color: #212121;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}
button:hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}
.body-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center ;
}
.image-wrapper {
    width: 100%;
    text-align: center;
}
.dashboard-img {
    max-width: 100%;
}
.description {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > p {
        padding: 0rem 2rem;
        font-size:18px;
        color: #212121;
        font-weight: normal;
    }
}
.catch-phrase {
    > h2 {
        margin:0rem 0rem 1rem 0rem;
        font-size: 32px;
        font-weight: 400;
    }
}
</style>
