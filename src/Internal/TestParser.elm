module Internal.TestParser exposing (bracketIntBlock, intBlock, intItem)

-- import Internal.ParserHelpers exposing (..)
import Parser.Advanced exposing (..)
import Internal.Parser exposing (..)
import Parser exposing (Problem(..))
-- import Parser exposing (..)

type Problem =
    ExpectingInt

intItem : LXParser Int
intItem =
    succeed identity
        |= int
        |. ws


intBlock : LXParser (List Int)
intBlock =
    sequence
        { start = Token "" ExpectingInt
        , separator = Token ","
        , end = Token "" ExpectingInt
        , spaces = ws
        , item = int
        , trailing = Forbidden -- no trailing commma
        }


bracketIntBlock : LXParser (List Int)
bracketIntBlock =
    sequence
        { start = Token "[" ExpectingInt
        , separator = ","
        , end = "]"
        , spaces = ws
        , item = int
        , trailing = Forbidden -- no trailing commma
        }
