/*
 * Crea el editor con los botones correspondientes.
 *
 * Botones incluidos: 
 * 	- Estilos (personalizado)
 * 	- Negrita
 * 	- Cursiva
 *	- Subrayado
 *	- Tachado
 *	- Link
 *	- Citas
 *	- Lista desordenada
 *	- Lista numerada
 *	- Subindice
 *	- Superindice
 *	- Imagen (subir desde computadora)
 *	- Alineacion izquierda
 *	- Alineacion al centro
 *	- Alineacion a la derecha
 */
function createEditor(editorSelector)
{
	return AlloyEditor.editable(editorSelector, {
						toolbars: {
							styles: {
								selections: [
									{
										name: 'static',

										// Set all the buttons you want in your toolbar here
										buttons: [
													{
														name: 'styles',
														cfg: {
															styles: [
																	{
																		name: 'Encabezado 1',
																		style: { element: 'h1' }
																	},
																	{
																		name: 'Encabezado 2',
																		style: { element: 'h2' }
																	},
																	{
																		name: 'Grande',
																		style: { element: 'big' }
																	},
																	{
																		name: 'Pequeño',
																		style: { element: 'small' }
																	},
																	{
																		name: 'Código',
																		style: { element: 'code' }
																	}
																]
															}
													},
													'bold', 
													'italic', 
													'underline', 
													'strike', 
													'link', 
													'quote',
													'ul',
													'ol',
													'subscript',
													'superscript',
													'image',
													'imageLeft',
													'imageCenter',
													'imageRight'											
												],

										// Force selection toolbar to always show this toolbar
										test: function(payload) { return true; },      

										// Don't show arrows for this toolbar                         
										getArrowBoxClasses: function() { return ''; },

										// Always position this toolbar on the upper-left corner of your editable node
										setPosition: function(payload) { 
											var editableElement = payload.editor.get('nativeEditor').element.$;		
											
											var _top = editableElement.offsetTop - 46;
											var toolbarPosition = [editableElement.offsetLeft, _top];
																																
											this.moveToPoint(toolbarPosition, toolbarPosition); 																					
																																	
											return true; 
										}
									}
								]
							}
						}
			});	
}