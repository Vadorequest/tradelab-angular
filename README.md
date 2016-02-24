# Tradelab exercise

This is an exercise asked by the **Tradelab** company.

The functional specification can be found in the **doc** folder.

The goal is to make the given application, following the given specifications with Angular.js front-end framework.


## TODO list

**Base features:**

- [x] Angular setup. (~~20mn~~ 60mn)
- [x] HTML (~~20mn~~ 30mn)
    - [x] select box
    - [x] city name
    - [x] area for today's result
    - [x] area for next three days results
    - [x] styling (bootstrap) (~~forgotten~~ 20mn)
- [x] Load JSON data to fill select input. (~~forgotten~~ 30mn) *[Issues with Angular load dependecies]*
- [x] Call API endpoint to get the data for today. (~~30mn~~ 20mn)
- [x] Call API endpoint to get the data for the next three days. (~~15mn~~ 20mn)
- [x] Display API results. (~~30mn~~ 15mn)
    - [x] weather icon depending on the result
    - [x] min/max temperature in Celsius degrees
- [x] Display results for the first city of the list by default. (10mn)
- [x] Display loader while fetching data at startup. (~~forgotten~~ 20mn)
- [x] Display pre-loader when a city is selected while we're fetching the data from the API endpoint. (~~10mn~~ 5mn)

Total (initially) estimated time: 155mn
Total time spent: 210-220

*Optional features:*

- [ ] ~~Autocomplete city name based on typed characters. (smart search) (30mn)~~
- [ ] ~~Cleaning code. (20mn)~~

Total estimated time (with optional features): 205mn

*Misc:*

- [x] Reading specs, project management. (~~30mn~~ 45mn)
- [x] Serve static file through node server. (~~10mn~~ 5mn)
- [x] Read and understand the Weather API. (~~forgotten~~ 25mn)

Total estimated time (with optional features and misc): ~~245mn~~ 285mn

---

Known issues:

- CityService is useless, I wasn't able to pre-fetch the data through the route `_resolve` way. So I ended up using `$.get` right in the directive...
- Some included files are useless (angular plugins), they were installed when trying to fix the `_resolve` thing with routes and states.

---

Total time spent: 4h45