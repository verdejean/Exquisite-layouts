Ext.application({
    name: 'Sencha',
    requires: ['Ext.Carousel'],

    launch: function() {

        var red = {
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        var amber = {
            style: "background-color: #FFBF00; color:white;",
            title: "Amber",
            html: "Amber"
        };

        var green = {
            style: "background-color: #3B7E00; color:white;",
            title: "Green",
            html: "Green"
        };

        Sencha.container = Ext.create('Ext.Carousel', {
            fullscreen: true,
            items: [red, amber, green]
        });

    }
});