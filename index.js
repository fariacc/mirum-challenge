$(document).ready(function(){
  $('#phone').mask('(00) 000000000');//atribuindo máscara no campo input de phone
});

$('#btn-register').on('click', function(e){
  //atribuindo variáveis com os valores de cada campo input do formulário
  var name = $('#first-name').val();
  var phone = $('#phone').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var repeatPassword = $('#repeat-password').val();

  if (name == '' || phone == '' || email == '' || password == '' || repeatPassword == '') {
    alert('Preencha todos os campos.');
  }
  else if (password != repeatPassword) {//checando se os campos de password e repeat password são diferentes ou não
    alert('Opa, parece que as senhas não são iguais.');
    e.preventDefault();//não dá submit no formulário caso as senhas sejam diferentes
  }
  else {
    alert(//mostrando os valores do formulário no alert
      'First name: ' + name + ', Phone: ' + phone + ', E-mail address: ' + email +
      ', Password: ' + password + ', Repeat password: ' + repeatPassword
    );
  }
});

// SCRIPT DO REGISTER GOOGLE
var googleUser = {};
function startApp() {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: '765041008701-ao6uh18vh7t9fontir3088t24jp9hggc.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin', scope: 'profile email'
    });
    attachSignin(document.getElementById('btn-google'));//o botão customizado btn-google abre a tela de registro da Google
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
  function(googleUser) {//googleUser é onde vem as informações do usuário
    alert(//mostrando as informações do usuário
      'First name: ' + googleUser.w3.ig + ', E-mail address: ' + googleUser.w3.U3
    );
  },
  function(error) {
    alert(JSON.stringify(error, undefined, 2));
  });
}

// SCRIPT DO REGISTER FACEBOOK
function fb_login() {
  FB.login(function(response) {
    if (response.authResponse) {
      FB.api('/me', function(response) {//faz a requisição com os dados de ID do usuario para pegar as informações
        alert(//mostrando as informações do usuário
          'First name: ' + response.name + ', E-mail address: ' + response.email
        );
      });
    }
    else {
      alert('Acesso negado pelo usuário.');
    }
  },
  {
    scope: 'email, public_profile'
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '593434964537431', cookie: true, xfbml: true, version: 'v5.0'
  });
};

(function(d, s, id) {// carrega a SDK do facebook
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
