<template>
  <!-- Modal -->
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
          <h5 class="modal-title text-danger" id="exampleModalLabel">Avant de télécharger Votre Application</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4>Merci d'entrer le mot de passe que vous avez reçu par mail</h4>
          <div class="form-group d-flex">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
          </div>
          <div class="spinner" style="display: flex; justify-content:center;"><img style="display: none; width: 30px; height: auto; text-align: center;" :src="require('@/assets/spinner.gif')" alt="spinner"></div>
          <button type="button" class="btn btn-secondary close-js" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary js-send">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(function() {
  $('button.js-send').click(function () {
    $('div.spinner > img').css('display', 'block');
    var apiUrl = "https://services.cook-and-connect.aioa.fr/check-password.php";
    var hash = "$2b$06$75BmGlZVqfTdqM39A7.1OuzdmfJqCaG5hfkeO2760xfLMuVYLupjW";
    var password = $('input.form-control').val();
    var datas = {
      hash: hash,
      password: password
    };
    console.log(datas);
  
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
      console.log(response);
      if (response.ok) {
        console.log('ok');
        $('div.spinner').text('Mot de passe correct !');
        setTimeout(function() {
          $('button.close-js').click();
        }, 1000)
      } else {
        $('div.spinner').text('Mot de passe incorrect, réessayez !');
      }
    });
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
}
.modal-body {
  > h4 {
    font-weight: normal;
  }
}
button.close {
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
