// Import all plugins
import * as bootstrap from 'bootstrap';
import {franc} from 'franc'
import {iso6393} from 'iso-639-3'

let get = document.getElementById('langInput');

get.addEventListener('keyup', function(){
    let langGuess = franc(document.getElementById('langInput').value, {minLength: 3});
    let langFullName = iso6393.filter(i => i.iso6393 === langGuess)[0].name;

    document.getElementById('lang-display').textContent = langFullName;
})