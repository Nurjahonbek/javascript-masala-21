function isresgister(){
    const user = localStorage.getItem('user')
    if(user == null){
        return false
    }
    else{
        return true
    }
}

window.addEventListener('load', function(){
    const is = isresgister()
    if(!is){
        window.location.pathname = '/src/pages/register.html'
    }
})