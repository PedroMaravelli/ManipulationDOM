const search = document.getElementById('searchSc')

search.addEventListener('mouseover', () =>{

    search.style.boxShadow = '0px 1px 3px black'
})

search.addEventListener('mouseout', () => {
    search.style.boxShadow = 'none'
})