module Main exposing (main)

{-|  

-}

import Platform exposing (Program)
import MiniLatex
import Internal.RenderToLatex as L
import Diff
import Internal.LatexState
import Internal.Parser exposing (..)
import Internal.Render exposing (..)
import Parser exposing (run)
import Html exposing (..)


-- type alias InputType = String
-- type alias OutputType = List String

-- port get : (InputType -> msg) -> Sub msg

-- port put : OutputType -> Cmd msg


-- main : Program Flags Model Msg
-- main =
--     Platform.worker
--         { init = init
--         , update = update
--         , subscriptions = subscriptions
--         }

str1 = "a^2 = 7$"
ampere = "\\textit{A} \\equiv \\frac{\\textit{C}}{\\textit{s}} \\equiv \\frac{\\textit{coulomb}}{\\textit{second}}"

main : Html msg
main =
    Html.div []
     [  Html.h1 [] [ Html.text "Test LaTeX" ]
      , Html.p [] [inlineMath <| "\\(" ++ ampere ++ "\\)"]
    --   , Html.p [] [inlineMath "$a^2 = 9$"]
    --   , inlineMath "~~a^2 = 7$~~"
     ]

inlineMath : String -> Html msg
inlineMath str =
    let
        renderOutput =
            renderString2 str
        _ = Debug.log "renderOutput" renderOutput
    in
        Html.div []
            [
                renderOutput
            ]



-- renderString2 : Internal.Render.SourceText -> Html msg
renderString2 str =
    renderString Internal.LatexState.emptyLatexState str

type alias Model =
    ()


type Msg
    = NoOp


type alias Flags =
    ()


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( (), Cmd.none )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp -> 
            ( model, Cmd.none)


subscriptions : Model -> Sub Msg
subscriptions _ = Sub.none
