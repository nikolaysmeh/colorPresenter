## Intro
**colorPresenter** is beautiful solution for online stores and websites to present available colors of products. You does not need any images anymore, only colors in HEX format.

## Demo
[http://colorPresenter.nikolay.ws/](http://colorPresenter.nikolay.ws/)

## Install
For use you have to require Jquery like this:  
`<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>`  

and now you can require colorPresenter:  
`<script src="../src/colorPresenter.js"></script>`  


## Params
You can managment plugin used two params:


**colors**
Array with colors. Array can be:

*   one-level: simple one-row widget
*   two-level: simple multi-row widget
*   three-level: multi-row widget with gradients

**rounded**
if this param is 'true', then the widget will be rounded.
But enough words, let me show you examples:  

## Examples


### Square
The simplest example one-row square color block.  
`<script>  
    $('document').ready(function(){  
        $('.colorPresentator-1').colorPresentator({  
            'colors': ['#3e9e35', '#fff']  
        });  
    });  
</script>  
`

### Rounded Form

`<script>  
    $('document').ready(function(){  
        $('.colorPresentator-2').colorPresentator({  
            'colors': ['#D91500', '#6555ff'],  
            'rounded': true  
        });  
    });  
</script>  
`

### Gradient

`<script>  
    $('document').ready(function(){  
        $('.colorPresentator-6').colorPresentator({  
            'colors': [[['#6555ff','#fff'], ['#fff','#6555ff']]],  
            'rounded': true  
        });  
    });  
</script>`

### Multi-Row

`<script>  
    $('document').ready(function(){  
        $('.colorPresentator-3').colorPresentator({  
            'colors': [['#000'], ['#D91500', '#FBD233', '#D91500'], ['#FBD233', '#D91500', '#FBD233'], ['#000']],  
            'rounded': true  
        });  
    });  
</script>`

### Flag
 
`<script>  
    $('document').ready(function(){  
        $('.colorPresentator-4').colorPresentator({  
            'colors': [['#fff'], ['#6555ff'], ['#D91500']],  
            'rounded': true  
        });  
    });  
</script>`

### Diagonal

`<style>  
    #colorPresenter-5{  
        -ms-transform: rotate(45deg); /* IE 9 */  
        -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */  
        transform: rotate(45deg);  
    }  

</style>  

<script>  
    $('document').ready(function () {  
        $('.colorPresentator-5').colorPresentator({  
            'colors': [['#000'], ['#fff'], ['#000']],  
            'rounded': true  
        });  
    });  
</script>`