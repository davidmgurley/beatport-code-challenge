import unittest

from hamcrest import assert_that, equal_to

from challenges.range_parser import range_parser


class TestRangeParser(unittest.TestCase):

    def test_range_parser_returns_single_item(self):
        result = [5]
        assert_that(range_parser('5'), equal_to(result))

    def test_range_parser_returns_less_than_equal(self):
        result = [1, 2, 3, 4, 5, 6, 7, 8]
        assert_that(range_parser(':8'), equal_to(result))

    def test_range_parser_returns_greater_than_equal(self):
        result = [5, 6, 7, 8, 9, 10]
        assert_that(range_parser('5:'), equal_to(result))

    def test_range_parser_returns_range(self):
        result = [3, 4, 5, 6, 7, 8, 9]
        assert_that(range_parser('3:9'), equal_to(result))

    def test_range_parser_returns_bad_input_message(self):
        result = 'Range values must be integers!'
        assert_that(range_parser('a:b'), equal_to(result))

    def test_range_parser_returns_too_many_message(self):
        result = 'Only two values allowed!'
        assert_that(range_parser('1:2:3:4'), equal_to(result))
