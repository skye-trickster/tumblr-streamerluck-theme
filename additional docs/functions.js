function openLightbox(e) {
    const featured = $(this).parent();
    
    const maxWidth = $(window).width() * 0.85;
    let viewWidth = featured.data( 'full-width' );
    let viewHeight = featured.data( 'full-height' );
    
    if (viewWidth > maxWidth) {
        const scale = maxWidth / viewWidth;
        viewWidth *= scale;
        viewHeight *= scale;
    }
    
    Tumblr.Lightbox.init(
        [
            {
                width: viewWidth,
                height: viewHeight,
                low_res: featured.data( "orig-url" ),
                high_res: featured.data( "full-url" ),
                caption: $(this).attr("alt"),
            }
    ]);
    $( 'body' ).toggleClass( 'tumblr_lightbox_active' );
    
    return false;
}

function toggleSidebar(e) {
    const enabled = $( '#sidebar' ).hasClass( 'enabled' );
    $( '#sidebar' ).toggleClass( 'enabled', !enabled );
    $( 'html' ).toggleClass( 'mobile-disabled', !enabled );
}

function disableCheck(event) {
    if (event.target === this) toggleSidebar(event);
}

function setPhotosetLayout(e) {
    const show = $(this)

    function addRow(columns) {
        const d = $("<div></div>").appendTo(show).addClass("row");
        return d;
    }
    
    const layout = JSON.stringify(show.data("layout")).split("").map(x => parseInt(x));
    let row = 0, column = 0;
    count = 0
    let div = addRow(layout[row])
    $(this).children(".image").each(function(e) {
        if (column >= layout[row]) {
            div = addRow(layout[++row]);
            column = 0;
        }
        $(this).data("index", ++count);
        $(this).appendTo(div);
        column++;
    })
}
function startSlideshow(e) {

    const imageList = $(this).closest( '.slideshow' ).find( 'img' )
    const maxWidth = $(window).width() * 0.8;
    
    const image = $(this).find('img')
    
    const index = $(this).data("index");
    
    const t = imageList.map(function(i) {
        const figure = $(imageList[i]).parent();
        
        let viewWidth = figure.data( 'full-width' );
        let viewHeight = figure.data( 'full-height' );
        
        if (viewWidth > maxWidth) {
            const scale = maxWidth / viewWidth;
            viewWidth *= scale;
            viewHeight *= scale;
        }

        return {
            caption: figure.find('figcaption').text().trim(),
            width: viewWidth,//figure.data( "full-width" ),
            height: viewHeight,
            low_res: figure.data( "full-url" ),
            high_res: figure.data( "orig-url" ),
        }
    })

    Tumblr.Lightbox.init( t, index ? index : 0 );
    $( 'body' ).toggleClass( 'tumblr_lightbox_active' );
}