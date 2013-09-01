/*
 * JQuery plugin that use doTimeout plugin and jQuery hover to make an easier hoverIntent
 * www.escamillasweb.com
 * 
	Copyright (c) 2013 Jesús Escamilla

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($){
	$.fn.extend({
		time_on:function(busca,tiempo,callback){
			return this.each(function(){
				$(this).addClass('use_time_out');
				$(this).doTimeout(tiempo,function(){
					if($(this).hasClass('use_time_out')==true){
						if (typeof callback=='function'){
							callback.call($(this).find(busca));
						}
					}
				},this);
			});
		},
		time_out:function(busca,tiempo,callback){
			return this.each(function(){
				$(this).removeClass('use_time_out');
				$(this).doTimeout(tiempo,function(){
					if($(this).hasClass('use_time_out')==false){
						if (typeof callback=='function'){
							callback.call($(this).find(busca));
						}
					}
				},this);
			});
		}
	});
})(jQuery)
