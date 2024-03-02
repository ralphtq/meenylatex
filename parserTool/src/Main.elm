module Main exposing (main)

{-| -}

import Diff
import Html exposing (..)
import Internal.LatexState
import Internal.Parser exposing (..)
import Internal.Render exposing (..)
import Internal.RenderToLatex as L
import MiniLatex
import MiniLatex.Export exposing (toLaTeX, toLaTeXWithImages)
import Parser exposing (run)
import Platform exposing (Program)


str1 =
    "a^2 = 7$"


str2 =
    "\\begin{theorem}\n\\begin{a}x y z\\end{a}\\end{theorem}"


ampere =
    "\\(\\textit{A} \\equiv \\frac{\\textit{C}}{\\textit{s}} \\equiv \\frac{\\textit{coulomb}}{\\textit{second}}\\)"


ampere2 =
    "\\(\\textit{A} \\equiv \\frac{\\textit{C}}{\\textit{s}} \\equiv \\frac{\\textit{coulomb}}{\\textit{second}}\\)"


ampere3 =
    """The \\(\\textit{ampere}\\), often shortened to \\(\\textit{amp}\\), is the SI unit of electric current and is one of the seven SI base units.
\\(\\text{A}\\ \\equiv\\ \\text{amp (or ampere)}\\ \\equiv\\ \\frac{\\text{C}}{\\text{s}}\\ \\equiv\\ \\frac{\\text{coulomb}}{\\text{second}}\\ \\equiv\\ \\frac{\\text{J}}{\\text{Wb}}\\ \\equiv\\ \\frac{\\text{joule}}{\\text{weber}}\\)
Note that SI supports only the use of symbols and deprecates the use of any abbreviations for units.
"""


ampere4 =
    """The \\italic{ampere}, often shortened to \\italic{amp}, 
is the SI unit of electric current and is one of the seven SI base units defined as:

\\italic{A} ~~\\equiv \\frac{\\textit{C}}{\\textit{s}} 
\\equiv \\frac{\\textit{coulomb}}{\\textit{second}} 
\\equiv \\frac{\\text{joule}}{\\text{weber}}~~
"""


ctCountablyInfinite =
    """
A set of numbers is called countably infinite if there is a way to enumerate them.
Formally this is done with a bijection function that associates each number in the set with exactly one of the positive integers.  
The set of all fractions is also countably infinite.  
In other words, any set \\(X\\) that has the same cardinality as the set of the natural numbers, 
or \\( | \\text{X} |  >  | \\mathbb N | \\), 
is said to be a countably infinite set.
"""

quantityType =
    """
\\italic{Quantity Type} is an enumeration of quanity kinds. 
It specializes \\italic{dtype:EnumeratedValue} by constraining \\italic{dtype:value} to instances of \\italic{qudt:QuantityKind}.
"""


coherentUnitOfSystem =
    """
A coherent unit of measurement for a unit system is a defined unit that may be expressed as a product of powers of the system's base units with the proportionality factor of one. 
A system of units is coherent with respect to a system of quantities and equations if the system of units is chosen in such a way that the equations between numerical values have 
exactly the same form (including the numerical factors) as the corresponding equations between the quantities. 
For example, the 'newton' and the 'joule'. 
These two are, respectively, the force that causes one kilogram to be accelerated at 1 metre per second per  second, and the work done by 1 newton acting over 1 metre. 
Being coherent refers to this consistent use of 1. 
In the old c.g.s. system , with its base units the centimetre and the gram, the corresponding coherent units were the dyne and the erg, respectively the force that causes 1 gram 
to be accelerated at 1 centimetre per second per second, and the work done by 1 dyne acting over 1 centimetre.  
So 1 \\(\\text{newton = } 10^5 \\text{dyne, 1 joule = } 10^7 \\text{erg}\\), making each of the four compatible in a decimal sense within its respective other system, but not coherent therein.
"""


avogadroConstant =
    """
\\begin{Definition}
\\(L = \\frac{N}{n}\\), where \\(N\\) is the number of particles and \\(n\\) is amount of substance.
\\end{Definition}
"""


avogadroConstant2 =
    """
\\begin{Avogadro's Constant Definition}
\\(L = \\frac{N}{n}\\), where \\emph{N} is the number of particles and \\emph{n} is amount of substance.
\\end{Avogadro's Constant Definition}
"""


bohrMagneton =
    """
\\begin{BohrMagneton Definition}
\\(\\mu_B = \\frac{e\\hbar}{2m_e}\\), 
where \\emph{e} is the elementary charge, \\(\\hbar\\) is the Planck constant, 
and \\emph{m_e} is the rest mass of electron.
\\par
Compare with: \\href{https://qudt.org/vocab/constant/BohrMagneton}{QUDT Linked Data}
\\end{BohrMagneton Definition}
"""


fineStructureConstant =
    """
\\begin{Fine Structure Constant Definition}
\\(a = \\frac{e^2}{4\\pi\\varepsilon_0\\hbar c_0}\\), where \\(e\\) is the elementary charge, \\(\\varepsilon_0\\) is the electric constant, item \\(\\hbar\\) is the reduced Planck constant, and \\(c_0\\) is the speed of light in vacuum.
\\par
Compare with: \\href{https://qudt.org/vocab/constant/FineStructureConstant}{QUDT Linked Data}
\\end{Fine Structure Constant Definition}
"""


stringsToRender =
    [ "% This is a comment\n"

    -- , ampere4
    -- , ctCountablyInfinite
    -- , quantityType
    -- , coherentUnitOfSystem
    -- , avogadroConstant2
    , bohrMagneton

    -- , fineStructureConstant
    -- , equation1
    -- , equation2
    -- , theorem1
    -- , tabular1
    -- , listExample1
    -- , xLink1
    -- , ellie1
    ]


main : Html msg
main =
    Html.div []
        [ Html.h2 []
            [ Html.text "LaTeX Rendering Tests" ]
        , Html.div
            []
            (stringsToRender
                |> List.map (\r -> Html.p [] [ testRenderingOf r ])
            )
        ]


testRenderingOf : String -> Html msg
testRenderingOf str =
    Html.div []
        [ renderString Internal.LatexState.emptyLatexState str
        ]


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
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


equation1 =
    """
\\begin{equation}
\\int_0^1 x^n dx = \\frac{1}{n+1}

\\end{equation}"""


equation2 =
    """
\\begin{equation}

\\label{uncertaintyPrinciple}
\\left[\\hat p, x\\right] = -i \\hbar

\\end{equation}
"""


theorem1 =
    """
\\begin{theorem}
Infinity is \\emph{very} large: ~~\\infinity^2 = \\infinity~~.
\\end{theorem}"""


tabular1 =
    """
\\begin{tabular}
1 & 2 \\\\
 3 & 4 \\\\
\\end{tabular}
"""


ellie1 =
    "\\ellie{8tsqnpLx7a1/1}{foo}"


listExample1 =
    """
\\begin{itemize}
\\item aaa.
 
\\item bbb.
 
\\item xx

\\end{itemize}
"""



-- bozo = "\\bozo{1}{2}"


xLink1 =
    "\\xlinkPublic{378}{Infinity}"
