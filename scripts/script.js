var app = angular.module("myApp", []);
app.controller(
    'MainController',
    ['$scope', function ($scope) {
        $scope.title = 'sewing';
        $scope.showDWS = function () {
            $scope.title = "drawings";
            return;
        };
        $scope.showSWP = function () {
            $scope.title = "sewing";
            return;
        };
        $scope.drawings = [
            {
                title: 'Interchange',
                date: new Date('2018', '00', '01'),
                srcname: 'images//dw1.png'
            },
            {
                title: 'Windswept Ridge',
                date: new Date('2019', '06', '05'),
                srcname: 'images//dw2.png'
            },
            {
                title: 'Diva',
                date: new Date('2019', '06', '06'),
                srcname: 'images//dw3.png'
            },
            {
                title: 'Rainy farewell',
                date: new Date('2019', '06', '12'),
                srcname: 'images//dw4.png'
            },
            {
                title: 'Sanguine dance',
                date: new Date('2019', '06', '14'),
                srcname: 'images//dw5.png'
            },
            {
                title: 'Surfs-up',
                date: new Date('2019', '06', '20'),
                srcname: 'images//dw6.png'
            },
            {
                title: 'Roseburst',
                date: new Date('2019', '07', '03'),
                srcname: 'images//dw7.png'
            },
            {
                title: 'Mechawasp',
                date: new Date('2019', '07', '17'),
                srcname: 'images//dw8.png'
            },
            {
                title: 'Seahare',
                date: new Date('2019', '07', '17'),
                srcname: 'images//dw9.png'
            },
            {
                title: 'Love lily',
                date: new Date('2019', '08', '02'),
                srcname: 'images//dw10.png'
            },
            {
                title: 'Swapable',
                date: new Date('2019', '08', '02'),
                srcname: 'images//dw11.png'
            },
            {
                title: 'Dance of death',
                date: new Date('2019', '08', '13'),
                srcname: 'images//dw12.png'
            },
            {
                title: 'Sea turtle',
                date: new Date('2019', '09', '02'),
                srcname: 'images//dw13.png'
            },
            {
                title: 'Sorrow',
                date: new Date('2019', '11', '01'),
                srcname: 'images//dw14.png'
            },
            {
                title: 'Fall',
                date: new Date('2019', '11', '07'),
                srcname: 'images//dw15.png'
            },
            {
                title: 'Delicious',
                date: new Date('2020', '00', '12'),
                srcname: 'images//dw16.png'
            },
            {
                title: 'On the hunt',
                date: new Date('2020', '00', '13'),
                srcname: 'images//dw17.png'
            },
            {
                title: 'Candlelight',
                date: new Date('2020', '01', '08'),
                srcname: 'images//dw18.png'
            },
            {
                title: 'Illness',
                date: new Date('2020', '01', '16'),
                srcname: 'images//dw19.png'
            },
            {
                title: 'Desert rise',
                date: new Date('2020', '01', '24'),
                srcname: 'images//dw20.png'
            }
        ]
        $scope.swproj = [
            {
                title: 'Bees',
                date: new Date('2020', '01', '09'),
                srcname: 'images//swprj1.png'
            },
            {
                title: 'Sailor',
                date: new Date('2020', '01', '27'),
                srcname: 'images//swprj2.png'
            },
        ]
        $scope.aboutInfo = [
            {
                title: 'Education',
                place: [
                    {
                        name: 'SUNY Oneonta',
                        description: [
                            {
                                acomplishment: 'Bachelor of Science: Computer Science',
                                dateStart: new Date('2009', '00', '01'),
                                dateEnd: new Date('2015', '04', '15')
                            },
                            {
                                acomplishment: 'Bachelor of Science: Mathematics',
                                dateStart: new Date('2009', '00', '01'),
                                dateEnd: new Date('2015', '04', '15')
                            }
                        ]
                    },
                    {
                        name: 'Binghamton University',
                        description: [
                            {
                                acomplishment: 'Masters of Science: Computer Science',
                                dateStart: new Date('2017', '00', '01'),
                                dateEnd: new Date('2019', '04', '17')
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Work Experience',
                place: [
                    {
                        name: 'Sterling Medical Devices',
                        description: [
                            {
                                acomplishment: 'Developed, tested, and documented an Interpretation library testing for bacterial DNA in blood samples. Documented an international project creating a robot for full knee arthroplasty surgery.',
                                dateStart: new Date('2019', '04', '27'),
                                dateEnd: new Date('2020', '00', '17')
                            }
                        ]
                    },
                    {
                        name: 'MetroPlus',
                        description: [
                            {
                                acomplishment: 'Developed front end web app modules using AngularJS, ASP.NET, and managed web app integration with SQL Servers',
                                dateStart: new Date('2020', '02', '02'),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Technical Experience',
                place: [
                    {
                        name: 'Programming Languages',
                        description: [
                            {
                                acomplishment: 'C++, Java, C#, JavaScript, C, Python, Haskel, Perl',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Design Patterns',
                        description: [
                            {
                                acomplishment: 'Bridge, Builder, Chain of responsibility, Command, Decorator, Factory, Flyweight, Mediator, Memento, Object pool, Observer, Proxy, Singleton, State, Strategy, Visitor, MVC, Iterator',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Web Development Skills',
                        description: [
                            {
                                acomplishment: 'AngularJS, ASP.NET, CSS, Html',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'High Performance Programming Skills',
                        description: [
                            {
                                acomplishment: 'SIMD Intel Intrinsics, CUDA, OpenMP',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Database Skills',
                        description: [
                            {
                                acomplishment: 'MongoDB, SQL',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Software Testing Skills',
                        description: [
                            {
                                acomplishment: 'JUnit, MSTest',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Tools Skills',
                        description: [
                            {
                                acomplishment: 'GitHub, Git, Microsoft Azure, Planview Leankit',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Campus & Community Engagement',
                place: [
                    {
                        name: 'Volunteer work',
                        description: [
                            {
                                acomplishment: '80 hours for Q-Center at Binghamton University',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            },
                            {
                                acomplishment: '420 hours for Manhattan Valley Golden Age Center at the Red Oak',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            },
                            {
                                acomplishment: '50 hours for Rutgers Presbyterian Church soup kitchen',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            },
                            {
                                acomplishment: '200 hours for West Presbyterian Church in Binghamton soup kitchen',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'Computer Programmers United',
                        description: [
                            {
                                acomplishment: 'Competed in Consortium for Computing Sciences in Colleges Northeastern (CCSCNE) placing highest ever for our college',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            },
                            {
                                acomplishment: 'Led Computer Programmers United (CPU) in SUNY College at Oneonta as officer',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    },
                    {
                        name: 'First Robotics Competition',
                        description: [
                            {
                                acomplishment: 'Competed in and won the Rochester Regional going on to the US Nationals',
                                dateStart: new Date('', '', ''),
                                dateEnd: new Date('', '', '')
                            }
                        ]
                    }
                ]
            }
        ]
        $scope.projectInfo = [
            {
                name: 'Personal Web-page',
                description: 'A personal web page detailing my skills, and hobbies',
                details: 'Done using basic html for structure, css for styling, and Angular.JS for some static & dynamic elements to highlight skills on my resume, and some personal hobbies of mine',
                date: new Date('', '', ''),
                link:'https://github.com/hyperbolicj/Personal-Web-Page'
            },
            {
                name: 'Blood testing Interpretation Library',
                description: 'software module using data derived from imaged prepared blood samples to determine possible bacterial infections',
                details: 'Data extraction was done using strategy pattern to handle various data file formats used by preceeding module. The driver of the interpratation library was implemented using singleton pattern to ensure memory overheads were not exceeded. The driver also implemented object pool pattern to have a fixed number of interpraters to handle processing of seperate blood samples asynchronously.',
                date: new Date('2020', '00', '03'),
                link: ''
            },
            {
                name: 'Full Knee Arthroplasty Robot Documentation',
                description: 'Documentation of code for several project modules for a robot designed to assist in Full Knee Arthroplasty surgery',
                details: 'Made recommendations to testing teams, and developers regarding current test coverage shortfalls, and  inconsistencies in coding standards.',
                date: new Date('2020', '00', '03'),
                link: ''
            },
            {
                name: 'MS Capstone project',
                description: 'Java & C# application that attempts to create a mapping between a transcript and the accompanying audio file. To begin an audio playback from any user specified word',
                details: 'The app uses dynamic gui view to switch between the 3 core components of the application. The sampler which samples audio files for use by both the neural network training component, & main user interface component, the neural network trainer used to train a new model given the necessary files, and the main user interface used to apply a model to create a mapping between a transcript & the audio file.',
                date: new Date('2019', '03', '25'),
                link: ''
            }
        ]
	}
	]
);