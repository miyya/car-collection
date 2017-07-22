/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */
 
 //var variables
var templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
var stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
var stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;
//exporting traslate module
module.exports.translate = function(load){
  if (load.source.indexOf('moduleId') != -1) return load;
//var url
  var url = document.createElement('a');
  url.href = load.address;
//var basePathParts
  var basePathParts = url.pathname.split('/');
//var basePathParts
  basePathParts.pop();
  var basePath = basePathParts.join('/');
//var baseHref
  var baseHref = document.createElement('a');
  baseHref.href = this.baseURL;
  baseHref = baseHref.pathname;
//if condition fo baseref
  if (!baseHref.startsWith('/base/')) { // it is not karma
    basePath = basePath.replace(baseHref, '');
  }
//load source
  load.source = load.source
    .replace(templateUrlRegex, function(match, quote, url){
      var resolvedUrl = url;

      if (url.startsWith('.')) {
        resolvedUrl = basePath + url.substr(1);
      }
	//return url
      return 'templateUrl: "' + resolvedUrl + '"';
    })
    .replace(stylesRegex, function(match, relativeUrls) {
      var urls = [];
	//while loop for matching url not equal to null
      while ((match = stringRegex.exec(relativeUrls)) !== null) {
        if (match[2].startsWith('.')) {
          urls.push('"' + basePath + match[2].substr(1) + '"');
        } else {
          urls.push('"' + match[2] + '"');
        }
      }
		//return style url
      return "styleUrls: [" + urls.join(', ') + "]";
    });
//return load
  return load;
};
