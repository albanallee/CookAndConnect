<template>
  <div>
    <!-- Modal Log-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Avant de télécharger votre Application</h5>
            <h5 class="modal-title-after" id="exampleModalLabel">Choisissez votre Version</h5>
            <button
              type="button"
              class="close exit-js"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span style="font-size: 40px;font-weight: 300;" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4>Merci d'entrer le mot de passe que vous avez reçu par mail</h4>
            <div class="form-group d-flex">
              <label class="col-4" for="exampleInputPassword1">Mot de passe</label>
              <input type="password" class="form-control col-8" id="exampleInputPassword1" placeholder="**********">
            </div>
            <div class="spinner" style="display: flex; justify-content:center; margin: 1.5rem  0rem;"><span></span><img style="display: none; width: 30px; height: auto; text-align: center;" :src="require('@/assets/spinner.gif')" alt="spinner"></div>
            
            <input type="submit" class="btn-submit-modal btn btn-primary js-send"></input>
          </div>
          <div class="modal-body-after">
            <div class="accordion" id="accordionExample" style="width:100%;">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link version-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Version 1.2
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Ajout d'une liste de courses pour auto-incrémenter votre liste d'ingédients</p>
                    <i type="button" href="#" class="icon-cloud-download" style="font-size: 28px;"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed version-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Version 1.1
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Création d'un utilisateur Cuisinier</p>
                    <i type="button" href="#" class="icon-cloud-download" style="font-size: 28px;"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed version-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Version 1.0
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Création de l'application Cook&Connect</p>
                    <i type="button" href="#" class="icon-cloud-download" style="font-size: 28px;"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal List -->
    
  </div>
</template>

<script>
$(function() {
  $('input.js-send').click(function () {
    $('div.spinner > img').css('display', 'block');
    var apiUrl = "https://services.cook-and-connect.aioa.fr/check-password.php";
    var hash = "$2b$06$75BmGlZVqfTdqM39A7.1OuzdmfJqCaG5hfkeO2760xfLMuVYLupjW";
    var password = $('input.form-control').val();
    var datas = {
      hash: hash,
      password: password
    };
  
    // Requête qui vérifie le mot de passe et qui fais les petites animations si le mdp est bon ou pas
    $.ajax({
      url: apiUrl,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: 'json',
      data: datas,
    }).done(function (response) {
      $('div.spinner > img').css('display', 'none');
      if (response.ok) {
        $('div.spinner > span').text('Mot de passe correct !');
        setTimeout(function() {
          // Enregistrer l'authentification en session ou dans un cookie
          $('button.close-js').click();
          $('.modal-body').css('display', 'none');
          $('.modal-title').css('display', 'none');
          $('.modal-body-after').css('display', 'flex');
          $('.modal-title-after').css('display', 'flex');
        }, 1000)
      } else {
        $('div.spinner > span').text('Mot de passe incorrect, réessayez !');
      }
  });
  });
  $('button.close-js').click(function() {
  $('input.form-control').val('');
    $('div.spinner > span').text('');
  });
  $('button.exit-js').click(function() {
    $('input.form-control').val('');
    $('div.spinner > span').text('');
  });
});
export default {
  name: "Modal",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.modal {
  top: 25%;
}
.form-group {
  justify-content: space-around;
  margin: 2rem 0rem;
  align-items: center;
}
.modal-title {
  font-size: 34px;
  color: rgba(black, 0.8);
  padding: 0.4rem 1.5rem;
}
.btn-submit-modal {
  background-color:#c4ad99;
  border-color: #c4ad99;
  box-shadow: 4px 2px 4px #d1d1d1;
}
.btn-submit-modal:hover {
  box-shadow: 5px 5px 4px #d1d1d1;
}
.modal-body {
  > h4 {
    font-weight: normal;
    font-size: 16px;
    color: black;
    font-weight: 300;
  }
}
button.close {
  box-shadow: none;
  -webkit-box-shadow: none;
}
.modal-body-after {
  display: none;
}
.list-group {
  width: 100%;
}
.list-group-item.active {
  background-color: #c4ad99;
  border-color: #c4ad99;
}
.card-header {
  padding: 0;
}
.version-link {
  width: 100%;
  margin: 0;
  padding: 1rem;
  text-align: left;
  color: #c4ad99;
  transition: all 0.5s ease;
  text-decoration: none;
}
.version-link:hover {
  background-color: rgba(#c4ad99, 0.5);
  color: #fff;
  transition: all 0.5s ease;
}
.card-body {
  display: flex;
  justify-content: space-between ;
  align-items: center;
  > p {
    margin-bottom: 0;
    font-size: 16px;
    margin-right: 3rem;
    text-align: left;
  }
}
.modal-title-after {
  display: none;
  font-size: 34px;
  color: rgba(black, 0.8);
  padding: 0.4rem 1.5rem;
}
.fa-download {
  content: '\f019';
}
</style>
