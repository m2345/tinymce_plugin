frameworkShortcodeAtts={
	attributes:[
			{
				label:"Colors",
				id:"color",
				controlType:"select-control",
				selectValues:['primary', 'secondary', 'success', 'alert', 'warning', 'disabled'],
				defaultValue: 'primary',
				defaultText: 'primary',
				help:"Choose button colors."
			},
			{
                                label:"Corners",
                                id:"corners",
                                controlType:"select-control",
                                selectValues:['', 'round', 'radius'],
                                defaultValue: '',
                                defaultText: '',
                                help:"Choose button corners style."
                        },
			{
				label:"Size",
				id:"size",
				controlType:"select-control",
				selectValues:['', 'tiny', 'small', 'large'],
				defaultValue: '',
				defaultText: '',
				help:"Choose button size."
			},
			{
                                label:"Hollow",
                                id:"hollow",
                                controlType:"select-control",
                                selectValues:['', 'hollow'],
                                defaultValue: '',
                                defaultText: '',
                                help:"Do you want the button to be hollow"
                        },
                            {
                                label:"Dropdown",
                                id:"dropdown",
                                controlType:"select-control",
                                selectValues:['', 'dropdown'],
                                defaultValue: '',
                                defaultText: '',
                                help:"Show dropdown arrow on button"
                        },
                            {
                                label:"Stacked",
                                id:"stacked",
                                controlType:"select-control",
                                selectValues:['', 'stacked', 'stacked-for-small', 'stacked-for-medium'],
                                defaultValue: '',
                                defaultText: '',
                                help:"Show dropdown arrow on button"
                        },
			{
				label:"Custom Class",
				id:"custom_class",
				help:"Any CSS classes you want to add."
			},
			{
                                label:"",
                                id:"content",
				item_class:"hide_content"
                        },
	],
	defaultContent:" [button_group url='#'] Button 1 [/button_group] [button_group url='#'] Button 2 [/button_group] [button_group url='#'] Button 3 [/button_group] [button_group url='#'] Button 4 [/button_group] [button_group url='#'] Button 5 [/button_group] ",
	shortcode:"button_groups"
};
setTimeout(function(){
        jQuery("#framework-content").parents("tr").hide();
}, 50)

