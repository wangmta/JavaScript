var object = { a: 1, b: 2 } ;

function fn( ob )
{
    ob = { c: 3, d: 4 } ;
}

fn( object ) ;
console.log( object ) ;