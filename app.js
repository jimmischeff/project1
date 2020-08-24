console.log('linked')
$('form').on('submit',(event) => {
    event.preventDefault();
    const userInput = $('input').val()
    // console.log(userInput)

    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?name=' + userInput
    }).then(
        (data) => {
            $('#charBio').html(`<img src="${data.results[0].image}" width="200px"`)
            
            console.log(data.results[0].image)
        }
    )
})