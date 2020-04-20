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
            
            <input type="submit" class="btn btn-primary js-send"></input>
          </div>
          <div class="modal-body-after">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">Version 1.4</a>
              <a href="#" class="list-group-item list-group-item-action">Version 1.3</a>
              <a href="#" class="list-group-item list-group-item-action">Version 1.2</a>
              <a href="#" class="list-group-item list-group-item-action">Version 1.1</a>
              <a href="#" class="list-group-item list-group-item-action disabled">Version 1.0</a>
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
          $('.modal-body-after').css('display', 'flex');
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
  color: #c4ad99;
  padding: 0.4rem 1.5rem;
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
</style>
