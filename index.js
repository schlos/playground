/**
 * @license
 *
 * FOR PLOTLY DASHBOARD JS EXAMPLES: 
 * https://github.com/plotly/dashboards
 * Copyright (c) 2014 David Bushell BSD & MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * ----
 *
 * MODDIFICATINS: 
 * Thanks to Drazen for his contribution in this JS.
 *
 */

var putniTroskoviOdabir;

function selectPolitician() {
    var x = document.getElementById("thisPolitician").selectedIndex;
    var y = document.getElementById("thisPolitician").options;
    putniTroskoviOdabir = y[x].text;
    console.log(putniTroskoviOdabir);
    plotEverything();
}


function plotChartOne() {
    Plotly.d3.csv("https://raw.githubusercontent.com/codeforcroatia/putni-troskovi-dashboard/gh-pages/dataset-sluzbenaputovanjaclanovavladeALL.csv", function(err, rows) {

        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        // var thisPolitician = unpack(rows, 'Ime.i.prezime');
        if (putniTroskoviOdabir) {
            var politicianName = putniTroskoviOdabir;
        } else {
            var politicianName = 'sve';
        }

        var trace1 = {
            type: "bar",
            name: 'Putni trošak',
            x: unpack(rows, 'Datum.putovanja.polazak'),
            y: unpack(rows, 'Iznos.putnih.troskova.po.sluzbenom.putovanju.u.kn'),
            text: unpack(rows, 'Odrediste'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: politicianName
            }]
        }

        var trace2 = {
            type: "bar",
            name: 'Trošak smještaja',
            x: unpack(rows, 'Datum.putovanja.polazak'),
            y: unpack(rows, 'Iznos.troskova.smjestaja.po.sluzbenom.putovanju.u.kn'),
            text: unpack(rows, 'Odrediste'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: politicianName
            }]
        }

        var trace3 = {
            type: "bar",
            name: 'Trošak reprezentacije',
            x: unpack(rows, 'Datum.putovanja.polazak'),
            y: unpack(rows, 'Iznos.troskova.reprezentacije.u.kn'),
            text: unpack(rows, 'Odrediste'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: politicianName
            }]
        }

        var data = [trace1, trace2, trace3];

        var layout = {
            barmode: 'stack',
            separators: ',.0',
            yaxis: {
                showexponent: 'all',
                exponentformat: 'none'
            },
            showlegend: true,
            legend: {
                "orientation": "h"
            }
        };


        Plotly.newPlot('chartOne', data, layout);
    })

}

function plotChartTwo() {
    Plotly.d3.csv("https://raw.githubusercontent.com/codeforcroatia/putni-troskovi-dashboard/gh-pages/dataset-sluzbenaputovanjaclanovavladeALL.csv", function(err, rows) {

        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        // var thisPolitician = unpack(rows, 'Ime.i.prezime');

        var trace1 = {
            type: "bar",
            name: 'Putni trošak',
            x: unpack(rows, 'Godina'),
            y: unpack(rows, 'Iznos.putnih.troskova.po.sluzbenom.putovanju.u.kn'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: "Gabrijela Žalac"
            }]
        }

        var trace2 = {
            type: "bar",
            name: 'Trošak smještaja',
            x: unpack(rows, 'Godina'),
            y: unpack(rows, 'Iznos.troskova.smjestaja.po.sluzbenom.putovanju.u.kn'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: "Gabrijela Žalac"
            }]
        }

        var trace3 = {
            type: "bar",
            name: 'Trošak reprezentacije',
            x: unpack(rows, 'Godina'),
            y: unpack(rows, 'Iznos.troskova.reprezentacije.u.kn'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: "Gabrijela Žalac"
            }]
        }

        var data = [trace1, trace2, trace3];

        var layout = {
            barmode: 'stack',
            separators: ',.0',
            yaxis: {
                showexponent: 'all',
                exponentformat: 'none'
            },
            xaxis: {
                type: 'linear',
                tickmode: 'linear'
            },
            showlegend: true,
            legend: {
                "orientation": "h"
            }
        };


        Plotly.newPlot('chartTwo', data, layout);
    })
}

function plotChartThree() {

    Plotly.d3.csv("https://raw.githubusercontent.com/codeforcroatia/putni-troskovi-dashboard/gh-pages/dataset-sluzbenaputovanjaclanovavladeALL.csv", function(err, rows) {

        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        // var thisPolitician = unpack(rows, 'Ime.i.prezime');

        var trace1 = {
            mode: 'markers',
            type: "scatter",
            name: 'Putni trošak',
            x: unpack(rows, 'Datum.putovanja.polazak'),
            y: unpack(rows, 'Trajanje.putovanja.dana'),
            marker: {
                size: unpack(rows, 'Broj.osoba.u.pratnji'),
                color: unpack(rows, 'Iznos.putnih.troskova.po.sluzbenom.putovanju.u.kn'),
                'showscale': true
            },
            text: unpack(rows, 'Iznos.putnih.troskova.po.sluzbenom.putovanju.u.kn'),
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'Ime.i.prezime'),
                operation: '=',
                value: "Gabrijela Žalac"
            }]
        }

        var data = [trace1];

        var layout = {
            showlegend: false
        };


        Plotly.newPlot('chartThree', data, layout);
    })

}

function plotEverything() {
    plotChartOne();
    plotChartTwo();
    plotChartThree();
}


$(document).ready(function() {
    plotEverything();
});