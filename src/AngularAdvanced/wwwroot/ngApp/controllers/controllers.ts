namespace AngularAdvanced.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService:AngularAdvanced.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }

    export class AboutController {
        public message = 'This is Angular Advanced API Methods';
    }

    export class AnswerController {
        public answer;
        public loaded;

        public getAnswer() {
           // console.log('called getAnswer Method');
            this.loaded = false;
            this.$http.get('/api/deepThought/GetAnswer').then((response) => {
                //console.log('called http get');
                this.answer = response.data;
            }).catch((response) => {
                console.error('Could not ask Deep Thought.');
                }).finally(() => {
               // console.log('loaded returned true')
                this.loaded = true;
            });
        }

        constructor(private $http: ng.IHttpService) { }
    }

    export class FortuneController {
        public answer;
        public loaded;

        public getAnswer() {
            // console.log('called getAnswer Method');
            this.loaded = false;
            this.$http.get('/api/deepThought/GetFortune').then((response) => {
                //console.log('called http get');
                this.answer = response.data;
            }).catch((response) => {
                console.error('Could not ask Deep Thought.');
            }).finally(() => {
                // console.log('loaded returned true')
                this.loaded = true;
            });
        }

        constructor(private $http: ng.IHttpService) { }
    }

    export class GoogleMapsController{
        public center = { latitude: 47.671853, longitude: -122.121328 };
        public zoom = 15;
        public markers = [
            {
                id: 0,
                options: {
                    title: 'Seattle Coder Camps',
                },
                icon: '/coder-camps-logo.png',
                latitude: 47.671853,
                longitude: -122.121328
            },
            {
                id: 1,
                options: {
                    title: 'Houston Coder Camps',
                },
                latitude: 29.552561,
                longitude: -95.395219
            },
            {
                id: 3,
                options: {
                    title: 'San Francisco Coder Camps',
                },
                latitude: 37.809499,
                longitude: -122.253665
            }
        ];
    }

    export class FileUpload {
        public file;

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        constructor(private filepickerService, private $scope: ng.IScope) { }
    }

}
