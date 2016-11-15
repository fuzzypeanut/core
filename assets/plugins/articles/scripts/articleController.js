app.controller('articlesController', function($scope) {
    //tmp hardset, later to be dynamic
    $scope.articleList = [
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        },
        {
            Author: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            originalLang: 'en',
            translator: {
                givenName: 'Joe Smith',
                username: 'jsmith',
                profile: '/profiles/jsmith',
            },
            Title: 'Article Title',
            Teaser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.',
            url: '/section/articles/ArticleTitle',

        }
    ];
});
