// Handle POST request to ReqRes
$('#createUser').click(function () {
  const name = $('#name').val();
  const job = $('#job').val();

  $('#responseBox').html("Sending request...");

  $.ajax({
    url: 'https://reqres.in/api/users',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ name: name, job: job }),
    success: function (data) {
      $('#responseBox').html(
        `User Created:<br>Name: ${data.name}<br>Job: ${data.job}<br>ID: ${data.id}<br>Created At: ${data.createdAt}`
      );
    },
    error: function () {
      $('#responseBox').html("Failed to create user.");
    }
  });
});

// Handle GET request to JokeAPI
$('#getJoke').click(function () {
  $('#jokeBox').html("Fetching joke...");

  $.getJSON('https://v2.jokeapi.dev/joke/Programming?format=json', function (data) {
    if (data.type === "single") {
      $('#jokeBox').html(data.joke);
    } else if (data.type === "twopart") {
      $('#jokeBox').html(`${data.setup}<br><strong>${data.delivery}</strong>`);
    } else {
      $('#jokeBox').html("No joke found.");
    }
  }).fail(function () {
    $('#jokeBox').html("Failed to load joke.");
  });
});
