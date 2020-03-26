<template>
    <div class="body-wrapper">
        <div>
        <h2>Une possibilite de customiser votre application</h2>
            <p>L'application indispensable pour les cuisines</p>
            <button>Telecharger l'application</button>
        </div>
        <div class="image-wrapper">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="dashboard-img" src="/knife-3169323_1920.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img class="dashboard-img" src="/bake-599521_1920.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img class="dashboard-img" src="/bakery-1868396_1920.jpg" />
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
	cursor: pointer;
	appearance: none;
	border-radius: 4px;
	font-size: 1.25rem;
	padding: 0.75rem 1rem;
	border: 1px solid #212121;
	background-color: #fff;
	color: #212121;
}
.body-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center ;
}
.image-wrapper {
    width: 40%;
    text-align: center;
}
.dashboard-img {
    max-width: 100%;
}
</style>
