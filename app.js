console.log('linked')



$('form').on('submit',(event) => {
    event.preventDefault();
    $('#anotherDiv').css('display','flex')
    $('#imgContainer').empty()
    $('#nextBtn').unbind('click')
    $('#prevBtn').unbind('click')
    const userInput = $('input').val()
    // console.log(userInput)

    $.ajax({
        url: 'https://rickandmortyapi.com/api/character/?name=' + userInput
    }).then(
        (data) => {
            
            for (let i = 0; i < data.results.length; i++) {
                const $charBio = $('<div class=charBio style="display: none;">').draggable();
                const $charName = $('<h2>')
                $charName.html(data.results[i].name)
                $charBio.html(`<img src="${data.results[i].image}">`)
                $charBio.append($charName)
                $('#imgContainer').append($charBio)
                console.log(data.results[i].name)
            }
            
            let currentImgIndex=0;
            let highestIndex=$('.charBio').length-1;
            $('#imgContainer').children().eq(currentImgIndex).css('display','block')
            
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
                if(currentImgIndex > 0) {
                    currentImgIndex--
                } else {
                    currentImgIndex = highestIndex;
                }
                $('#imgContainer').children().eq(currentImgIndex).css('display','block')
                console.log(currentImgIndex)
            });
            $('.acid').droppable({
                drop: function() {
                    $('#imgContainer').children().eq(currentImgIndex).remove()
                    console.log("================", currentImgIndex, highestIndex)
                    currentImgIndex++
                    highestIndex--
                    $('#imgContainer').children().eq(currentImgIndex).css('display','block')
                    }
                })
        }
        )
    })
