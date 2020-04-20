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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
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
    var apiUrl = "https://bcrypt.org/api/check-password.json";
    var hash = "$2b$06$GO0I6.PGxkQxeKNuuRraUOvG3HfU2U2AkygikDYVrUpg7Xqo/bbxa";
    var password = $('input.form-control').text();
    var datas = {
      hash: hash,
      password: password
    };
    console.log(datas);
  
    $.ajax({
      url: apiUrl,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: 'json',
      data: datas,
    }).done(function (response) {
      console.log('done '+ response);
    }).fail(function (e) {
      console.log('error '+ e);
    });
  });
});
export default {
  name: "ModalPassword",
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
