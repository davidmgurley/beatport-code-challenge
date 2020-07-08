import unittest
import random

from hamcrest import assert_that, equal_to

from challenges.math_class import Math


class TestMathClass(unittest.TestCase):

    MIN = 1
    MAX = 1000000

    @classmethod
    def setUpClass(cls):
        cls.math = Math()
        cls.error_message = 'Inputs must be numbers!'

    def setUp(self):
        self.x = random.randint(self.MIN, self.MAX)
        self.y = random.randint(self.MIN, self.MAX)

    def test_add_returns_sum(self):
        result = self.x + self.y
        assert_that(self.math.add(self.x, self.y), equal_to(result))

    def test_add_returns_message_for_bad_input(self):
        assert_that(self.math.add('a', 'b'), equal_to(self.error_message))

    def test_subtract_returns_difference(self):
        result = self.x - self.y
        assert_that(self.math.subtract(self.x, self.y), equal_to(result))

    def test_subtract_returns_message_for_bad_input(self):
        assert_that(self.math.subtract([], {}), equal_to(self.error_message))

    def test_multiply_returns_product(self):
        result = self.x * self.y
        assert_that(self.math.multiply(self.x, self.y), equal_to(result))

    def test_multiply_returns_message_for_bad_input(self):
        assert_that(self.math.multiply(5, {}), equal_to(self.error_message))

    def test_divide_returns_quotient(self):
        result = self.x / self.y
        assert_that(self.math.divide(self.x, self.y), equal_to(result))

    def test_divide_returns_message_for_bad_input(self):
        assert_that(self.math.divide('c', 3), equal_to(self.error_message))
