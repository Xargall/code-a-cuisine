import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'generate',
    loadComponent: () =>
      import('./features/recipe-generator/recipe-generator').then((m) => m.RecipeGenerator),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/recipe-generator/ingredients-step/ingredients-step').then(
            (m) => m.IngredientsStep,
          ),
      },
      {
        path: 'preferences',
        loadComponent: () =>
          import('./features/recipe-generator/preferences-step/preferences-step').then(
            (m) => m.PreferencesStep,
          ),
      },
      {
        path: 'loading',
        loadComponent: () =>
          import('./features/recipe-generator/loading-step/loading-step').then(
            (m) => m.LoadingStep,
          ),
      },
    ],
  },
  {
    path: 'results',
    loadComponent: () => import('./features/results/results').then((m) => m.Results),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./features/recipe-detail/recipe-detail').then((m) => m.RecipeDetail),
  },
  {
    path: 'cookbook',
    loadComponent: () => import('./features/cookbook/cookbook').then((m) => m.Cookbook),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/cookbook/cookbook-overview/cookbook-overview').then(
            (m) => m.CookbookOverview,
          ),
      },
      {
        path: ':cuisine',
        loadComponent: () =>
          import('./features/cookbook/cuisine-recipes/cuisine-recipes').then(
            (m) => m.CuisineRecipes,
          ),
      },
    ],
  },
];
