/* Created by Megan
 * 5/17/16
 * */

frameworkShortcodeAtts={
	attributes:[
			{
				label:"Multi-Expand",
				id:"multi_expand",
				controlType:"select-control",
				selectValues:['false', 'true'],
				defaultValue: 'false',
				defaultText: 'false',
				help:"Multi-Expand?"
			},
			{
				label:"All Closed",
				id:"all_closed",
				controlType:"select-control",
				selectValues:['false', 'true'],
				defaultValue: 'false',
				defaultText: 'false',
				help:"All closed?"
			},
			       
	],
	defaultContent:"[accordion title=title1 active=yes] tab content [/accordion] [accordion title=title2] another content tab [/accordion]",
	shortcode:"accordions"
};
