console.log('linked')
$('form').on('submit',(event) => {
    event.preventDefault();
    $('#imgContainer').empty()
    const userInput = $('input').val()
    // console.log(userInput)

    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?name=' + userInput
    }).then(
        (data) => {
            for (let i = 0; i < data.results.length; i++) {
            const $charBio = $('<div class=charBio>')
            $charBio.html(data.results[i].name)
            $charBio.html(`<img src="${data.results[i].image}">`)
            $('#imgContainer').append($charBio)
            console.log(data.results[i].name)
            }
            console.log(data.results[0].image)

            let currentImgIndex=0;
            let highestIndex=$('.charBio').length-1;
            
            $('#nextBtn').on('click',() => {
                console.log('next button')
                $('#imgContainer').children().eq(currentImgIndex).css('display','none')
                if(currentImgIndex < highestIndex) {
                    currentImgIndex++
                } else {
                    currentImgIndex = 0;
                }
                $('#imgContainer').children().eq(currentImgIndex).css('display','block')
            });
            $('#prevBtn').on('click',() => {
                console.log('next button')
                $('#imgContainer').children().eq(currentImgIndex).css('display','none')
                if(currentImgIndex < highestIndex) {
                    currentImgIndex--
                } else {
                    currentImgIndex = 0;
                }
                $('#imgContainer').children().eq(currentImgIndex).css('display','block')
            });
        }
    )
})
