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
  
    var selectTopics = $("#topics");
    var problemDate = $("#date");
    var nameInput = $("#name");
    var surnameInput = $("#surname");
    var emailInput = $("#email");
    var phoneInput = $("#phone");
    var messageInput = $("#message");
    var submit = $("#submit");
  
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
  
    submit.on('click', function(e) {
      e.preventDefault();
  
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
        toastr.error('Starred fields cannot be left blank!', '', { "progressBar": true, "positionClass": "toast-top-center", "timeOut": 3000, "closeButton": true, "showDuration": "300", "hideDuration": "1000"});
      }
    });
  });