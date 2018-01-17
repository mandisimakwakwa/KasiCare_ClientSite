<!DOCTYPE html>

<html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        >
        <meta http-equiv="X-UA-Compatible"
              content="ie=edge"
        >

        <link rel="stylesheet"
              href="../../../../resources/libs/font_awesome/css/font-awesome.css"
        >

        <link rel="stylesheet"
              href="../../../../resources/libs/boilerplate/boilerplate.css"
        >

        <link rel="stylesheet"
              href="../../../../resources/libs/boilerplate/normalize.css"
        >

        <link rel="stylesheet"
              href="../../css/main.css"
        >

        <link rel="stylesheet"
              href="../../css/defaultCustom_styles.css"
        >

        <link rel="stylesheet"
              href="../../css/debug.css"
        >

        <title>Sign Up</title>
    </head>

    <body>

        <div class="sectionDiv">

            <div class="flexify parallxFX_Pg bkgdImage_b fulWidth_strch flexFlow_column">

                <div class="flexify fulWidth_strch themeGold_BkgdColrC">

                    <img src="../../../../resources/images/misc/kasicare.png"
                         class="logoImg flx_1_1"
                    />
                    <div class="flexify flx_8_1 titleTxt_FX fontSize_Larger themeBlack_TxtColrB"></div>
                    <div class="flx_1_1"></div>
                </div>

                <div class="containerNarrow fontSize_Medium themeBlack_TxtColrB flexify flx_1_1 flexFlow_column fulWidth_strch">


                    <div><h1>Practice Infomation</h1></div>
                </div>

                <form action="#"
                      method="post"
                      class="flexify flexFlow_column"
                >

                    <div class="flexify flx_4_1 flexFlow_row">

                        <input class="flexify flx_4_1 themeBlack_BkgdColrC quartrWidth_strch margin_10 padding_10"
                               name="practiceName"
                               id="practiceName"
                               type="text"
                               placeholder="Please Enter Practice Name..."
                        />
                        <input class="flexify flx_8_1 themeBlack_BkgdColrC quartrWidth_strch margin_10 padding_10"
                               name="geolocation"
                               id="geolocation"
                               type="text"
                               placeholder="Please Enter Longitude - Latitude or Address"
                        />
                    </div>
                    <div class="flexify flx_1_1 flexFlow_row">

                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="practice_speciality"
                               id="practice_speciality"
                               type="text"
                               placeholder="Please Enter Practice Speciality"
                        />
                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="practice_services"
                               id="practice_services"
                               type="text"
                               placeholder="Please Enter Practice Services"
                        />
                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="office_hours"
                               id="office_hours"
                               type="text"
                               placeholder="Please Enter Office Hours eg, 09H00-13h00"
                        />
                    </div>
                </form>

                <div class="containerNarrow themeBlack_TxtColrB flexify flx_1_1 flexFlow_column fulWidth_strch">

                    <ul class="fontSize_Small">

                        <li>Required for application functionality</li>
                        <li>Please use comma to seperate services</li>
                    </ul>
                    <div class="fa fa-angle-double-down btn_SmallCircle"></div>
                </div>
            </div>
            <div class="flexify parallxFX_Pg bkgdImage_c fulWidth_strch flexFlow_column">

                <div class="flexify fulWidth_strch themeGold_BkgdColrC">

                    <img src="../../../../resources/images/misc/kasicare.png"
                         class="logoImg flx_1_1"
                    />
                    <div class="flexify flx_8_1 titleTxt_FX fontSize_Larger themeBlack_TxtColrB"></div>
                </div>

                <div class="containerNarrow themeBlack_TxtColrB flexify flx_1_1 flexFlow_column fulWidth_strch">

                    <h1>Admin Profile</h1>
                </div>

                <form action="#"
                      method="post"
                      class="flexify flexFlow_column"
                >

                    <div class="flexify flx_1_1 flexFlow_row">

                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="username"
                               id="username"
                               type="text"
                               placeholder="Please Enter Admin Username"
                        />
                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="email"
                               id="email"
                               type="text"
                               placeholder="Please Enter Email"
                        />
                    </div>
                    <div class="flexify flx_1_1 flexFlow_row">

                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="password"
                               id="password"
                               type="password"
                               placeholder="Please Enter Password"
                        />
                        <input class="flexify flx_1_1 themeBlack_BkgdColrC quartrWidth_strch margin_5 padding_10"
                               name="passwordCheck"
                               id="passwordCheck"
                               type="password"
                               placeholder="Please Re-Enter Password"
                        />
                    </div>

                    <div class="btn_Medium themeDPink_BkgdColrB">Submit</div>
                </form>

                <div class="containerNarrow themeBlack_TxtColrB flexify flx_1_1 flexFlow_column fulWidth_strch">

                    <ul class="fontSize_Small">

                        <li>Required for application functionality</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>