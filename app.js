console.log('linked')
$('form').on('submit',(event) => {
    event.preventDefault();
    const userInput = $('input').val()
    // console.log(userInput)

    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?name=' + userInput
    }).then(
        (data) => {
            for (let i = 0; i < data.results.length; i++) {
            const $charBio = $('<div id=charBio>')
            $charBio.html(data.results[i].name)
            $charBio.html(`<img src="${data.results[i].image}" width="100px">`)
            $('body').append($charBio)
            console.log(data.results[i].name)
            }
            console.log(data.results[0].image)
        }
    )
})