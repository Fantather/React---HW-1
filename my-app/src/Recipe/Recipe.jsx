// Создайте и запустите приложение React, выводящее информацию о кулинарном рецепте в браузер
// Например: название рецепта, составляющие рецепта(ингредиенты и их количество), последовательность приготовления, фотография готового блюда
// При разработке нужно использовать функциональные компоненты и синтаксис JSX
import './Recipe.css'

class Recipe
{
    name;
    ingridients;
    recipeSteps;
    imgSrc;

    constructor(name, imgSrc)
    {
        this.name = name;
        this.ingridients = [];
        this.recipeSteps = [];
        this.imgSrc = imgSrc;
    }

    pushRecipeStep(recipeStep)
    {
        this.recipeSteps.push(recipeStep);
    }

    pushIngridient(ingridient)
    {
        this.ingridients.push(ingridient);
    }
}

export function GetRecipeHtml()
{
    const recipe = getRecipeObject();
    return(
        <div className="task-wrap">
            <h3 className='task-wrap__recipe-name'>{recipe.name}</h3>
            <div className="task-wrap__recipe-info">
                <div className='recipe-info__head-wrap'>
                    <img className='recipe-info__recipe-img' src={recipe.imgSrc} alt="Picture of the dish" />
                    <div className='recipe-info__ingridients'>
                        {recipe.ingridients.map((ingridient) => {
                            return getIngridientHtml(ingridient);
                        })}
                    </div>
                </div>
                <div className='recipe-info__steps'>
                    {recipe.recipeSteps.map((step, index) => {
                        return GetStepHtml(step, index + 1);
                    })}
                </div>
            </div>
        </div>
    );
}

function getIngridientHtml(ingridient)
{
    return(
        <div>{ingridient}</div>
    )
}

/**
 * Получает пункт рецепта и превращает его в HTML-элемент
 * @param {string} step 
 */
function GetStepHtml(step, stepNumber)
{
    return(
        <div className="step-card">
            <h5>ШАГ {stepNumber}:</h5>
            <p>{step}</p>
        </div>
    );
}

function getRecipeObject()
{
    const recipe = new Recipe('Классическая шаурма с курицей помидорами и капустой', 'https://static.1000.menu/res/640/img/content-v2/05/d8/21554/klassicheskaya-shaurma_1685711281_2_max.jpg');
    recipe.pushIngridient('Куриное филе - 250гр');
    recipe.pushIngridient('Огурцы - 1шт');
    recipe.pushIngridient('Помидоры - 1шт');
    recipe.pushIngridient('Капуста - 150гр');
    recipe.pushIngridient('Майонез - 50гр');
    recipe.pushIngridient('Кетчуп - 50гр');
    recipe.pushIngridient('Лаваш тонкий - 100гр');
    recipe.pushIngridient('Растительное масло - 20гр');
    recipe.pushIngridient('Соль - по вкусу');
    recipe.pushIngridient('Специи сухие - по вкусу');

    recipe.pushRecipeStep('Как сделать классическую шаурму с курицей помидорами и капустой? Для приготовления шаурмы подготовьте все необходимое. Овощи - огурец и помидор хорошо помойте. Капусту можно использовать как обычную белокочанную, так и пекинскую. Мне больше нравится пекинская, так как она мягче сама по себе, да и дети такую шаурму больше любят. Для соуса соедините в небольшой чаше майонез и кетчуп. Хорошо их перемешайте до однородного состояния.');
    recipe.pushRecipeStep('Куриное филе нарежьте на тонкие полосочки и обжарьте на горячей сковороде с добавлением небольшого количества растительного масла. По вкусу добавьте соль и специи. В качестве специи я использую молотый перец, паприку и сушеный базилик. Когда я жарю мясо на шаурму, то посыпаю специями достаточно обильно, так как это и будет основной вкус и аромат готового блюда. Выбрать подходящую сковороду и масло для жарки вам помогут статьи под рецептом.');
    recipe.pushRecipeStep('Капусту тонко нашинкуйте. Если используете белокочанную, то немного помните её руками, чтобы она стала немного мягче.');
    recipe.pushRecipeStep('Огурец и помидор нарежьте тонкой соломкой.');
    recipe.pushRecipeStep('Разложите на столе лист лаваша и смажьте его подготовленным соусом из кетчупа и майонеза. По краям листа мазать не надо. Оставьте место, чтобы было удобно сворачивать в рулет. Выложите на лаваш нашинкованную капусту. Под рецептом найдёте интересные рецепты домашнего майонеза.');
    recipe.pushRecipeStep('Выложите обжаренное мясо, огурцы и помидоры. При желании немного присолите начинку.');
    recipe.pushRecipeStep('Подверните лаваш с двух сторон по длинным краям до начинки, а затем сверните в рулет. Немного прижмите, чтобы шаурма стала плотнее.');
    recipe.pushRecipeStep('Готовую шаурму обжарьте на сухой сковороде или на гриле с двух сторон до появления румяных подпалин. Зачем обжаривать шаурму? При обжаривании лист лаваша немного подсыхает и снаружи образуется очень аппетитная хрустящая корочка, а внутри вас будет ждать сочная начинка.');
    recipe.pushRecipeStep('Сытное и вкусное блюдо готово! Угощайтесь пока она еще теплая. Приятного аппетита!');

    return recipe;
}