var sharp = require('sharp');

module.exports = function (args,cb) {

    args.background = args.background || "rgba(0, 0, 0, 0.65)";
    args.foreground = args.foreground || "#ffffff";


    var icon = sharp(args.input)
    icon.metadata()
    .then(function(metadata) {
        var bannerHeight = (metadata.height / 4);
        var textSize = bannerHeight / 2;

        var overlay = '<svg width="'+metadata.width+'" height="'+metadata.height+'">';
        overlay += '<rect height="'+bannerHeight+'" width="'+metadata.width+'" y="0" x="0" fill="'+args.background+'"/>';
        overlay += '<text font-family="Arial, sans-serif" font-size="'+textSize+'" y="'+(bannerHeight * 0.66)+'" x="'+(bannerHeight * 0.33)+'" stroke-opacity="null" stroke-width="0" stroke="'+args.foreground+'" fill="'+args.foreground+'">'+args.text.top+'</text>';
        
        var y = metadata.height - bannerHeight;
        overlay += '<rect height="'+bannerHeight+'" width="'+metadata.width+'" y="'+y+'" x="0" fill="'+args.background+'"/>';
        overlay += '<text font-family="Arial, sans-serif" font-size="'+textSize+'" y="'+(y + bannerHeight * 0.66)+'" x="'+(bannerHeight * 0.33)+'" stroke-opacity="null" stroke-width="0" stroke="'+args.foreground+'" fill="'+args.foreground+'">'+args.text.bottom+'</text>';
        overlay += '</svg>';
        
        return icon.overlayWith(new Buffer(overlay)).png().toFile(args.output, cb);
    });
}