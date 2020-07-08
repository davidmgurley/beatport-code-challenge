import unittest

from hamcrest import assert_that, equal_to, is_

from challenges.dict_to_obj import DictToObj


class TestDictToObj(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.nested_dict = {
            'a': 111,
            'b': 222,
            'c': {
                'd': 333
            },
        }
        cls.deeply_nested_dict = {
            'a': 111,
            'b': 222,
            'c': {
                'd': 333,
                'e': {
                    'f': {
                        'g': 444,
                    },
                },
            },
        }

    def test_dict_to_obj_with_flat_dict(self):
        obj = DictToObj(a=1, b=2, c=3)
        assert_that(obj.c, equal_to(3))

    def test_dict_to_obj_with_nested_dict(self):
        obj = DictToObj(**self.nested_dict)
        assert_that(obj.c.d, equal_to(333))

    def test_dict_to_obj_with_deeply_nested_dict(self):
        obj = DictToObj(**self.deeply_nested_dict)
        assert_that(obj.c.e.f.g, equal_to(444))

    def test_dict_to_obj_nested_attr_is_obj(self):
        obj = DictToObj(**self.deeply_nested_dict)
        assert_that(isinstance(obj.c.e, object), is_(True))
