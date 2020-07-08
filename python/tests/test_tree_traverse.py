import unittest

from hamcrest import assert_that, equal_to

from challenges.tree_traverse import tree_traverse


class TestTreeTraverse(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.flat_tree = {
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4,
            'e': 5,
        }
        cls.nested_tree = {
            'a': 123,
            'b': {
                'f': 222,
                'g': 111,
            },
            'c': 456,
            'd': {
                'h': 999,
                'i': 888,
            },
            'e': 789,
        }
        cls.deeply_nested_tree = {
            'a': 123,
            'b': {
                'c': {
                    'd': 321,
                    'e': {
                        'f': 234,
                        'g': 432,
                    },
                },
                'h': 345,
            },
            'i': 456,
            'j': {
                'k': 654,
                'l': {
                    'm': 876,
                    'n': {
                        'o': {
                            'p': 678,
                            'q': 543,
                        },
                        'r': 111,
                    },
                },
            },
            's': 222,
        }

    def test_tree_traverse_success_with_flat_tree(self):
        result = tree_traverse(self.flat_tree, 'c')
        assert_that(result, equal_to(3))

    def test_tree_traverse_success_with_nested_tree(self):
        result = tree_traverse(self.nested_tree, 'i')
        assert_that(result, equal_to(888))

    def test_tree_traverse_success_with_deeply_nested_tree(self):
        result = tree_traverse(self.deeply_nested_tree, 'p')
        assert_that(result, equal_to(678))
