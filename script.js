$(document).ready(function() {
  var topics = [
    "Another",
    "Donation mistakes",
    "Technical issues",
    "Account issues",
    "Possim praesent",
    "Melius comprehensam",
    "Inani noluisse",
    "Conclusionemque",
    "Labore eos"
  ];

  var contacts = [
    "E-mail",
    "Phone"
  ];

  $.ajax({
    url: "json_files/plant.json",
    method: "GET",
    dataType: "json",
    success: function(response) {
      $("#plant img").attr("src", response.image);
      $("#plant h2").text(response.title);
      $("#plant p").text(response.description);
      $("#plant a").attr("href", response.link);
    },
    error: function() {
      console.log("AJAX request for plant failed");
    }
  });

  $.ajax({
    url: "json_files/child.json",
    method: "GET",
    dataType: "json",
    success: function(response) {
      $("#child img").attr("src", response.image);
      $("#child h2").text(response.title);
      $("#child p").text(response.description);
      $("#child a").attr("href", response.link);
    },
    error: function() {
      console.log("AJAX request for child failed");
    }
  });

  $.ajax({
    url: "json_files/animal.json",
    method: "GET",
    dataType: "json",
    success: function(response) {
      $("#animal img").attr("src", response.image);
      $("#animal h2").text(response.title);
      $("#animal p").text(response.description);
      $("#animal a").attr("href", response.link);
    },
    error: function() {
      console.log("AJAX request for animal failed");
    }
  });

  var selectTopics = $("#topics");
  var problemDate = $("#date");
  var nameInput = $("#name");
  var surnameInput = $("#surname");
  var emailInput = $("#email");
  var phoneInput = $("#phone");
  var messageInput = $("#message");
  var submit = $("#submit-btn");

  topics.forEach(function(topic) {
    var option = $("<option></option>")
      .text(topic)
      .val(topic);
    selectTopics.append(option);
  });

  submit.button();

  selectTopics.selectmenu();

  problemDate.datepicker({
    maxDate: 0
  });

  $("#contact-method input").checkboxradio({
    required: true
  });

  function giveAlert() {
    var requiredFields = [problemDate, nameInput, emailInput, phoneInput, messageInput];
    var filled = true;

    for (var i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].val() === '') {
        filled = false;
        break;
      }
    }

    var radioChecked = $("#contact-method input:checked").length > 0;
    if (!radioChecked) {
      filled = false;
    }

    if (filled) {
      toastr.success('Form submitted successfully', '', { "progressBar": true, "positionClass": "toast-top-center", "timeOut": 3000, "closeButton": true, "showDuration": "300", "hideDuration": "1000"});
      problemDate.val('');
      nameInput.val('');
      surnameInput.val('');
      emailInput.val('');
      phoneInput.val('');
      messageInput.val('');
    } else {
      toastr.error('Form submission failed. It is an invalid form!', '', { "progressBar": true, "positionClass": "toast-top-center", "timeOut": 3000, "closeButton": true, "showDuration": "300", "hideDuration": "1000"});
    }
  }

  submit.on("click", giveAlert);
});