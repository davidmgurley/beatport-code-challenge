import unittest

from hamcrest import assert_that, equal_to

from challenges.playlist_sort import playlist_sort


class TestPlaylistSort(unittest.TestCase):

    def setUp(self):
        self.playlist_tracks = [
            {
                'playlist_id': 1,
                'track_id': 3212,
                'position': 1,
            },
            {
                'playlist_id': 1,
                'track_id': 3213,
                'position': 2,
            },
            {
                'playlist_id': 1,
                'track_id': 3214,
                'position': 3,
            },
            {
                'playlist_id': 1,
                'track_id': 3216,
                'position': 4,
            },
            {
                'playlist_id': 1,
                'track_id': 3217,
                'position': 5,
            },
        ]

    def test_playlist_sort_in_place(self):
        result = playlist_sort(self.playlist_tracks, 3212, 0)
        assert_that(result, equal_to(self.playlist_tracks))

    def test_playlist_sort_forward_move(self):
        expected = [
            {
                'playlist_id': 1,
                'track_id': 3212,
                'position': 1,
            },
            {
                'playlist_id': 1,
                'track_id': 3214,
                'position': 2,
            },
            {
                'playlist_id': 1,
                'track_id': 3216,
                'position': 3,
            },
            {
                'playlist_id': 1,
                'track_id': 3213,
                'position': 4,
            },
            {
                'playlist_id': 1,
                'track_id': 3217,
                'position': 5,
            },
        ]
        result = playlist_sort(self.playlist_tracks, 3213, 3)
        assert_that(result, equal_to(expected))

    def test_playlist_sort_backwards_move(self):
        expected = [
            {
                'playlist_id': 1,
                'track_id': 3212,
                'position': 1,
            },
            {
                'playlist_id': 1,
                'track_id': 3217,
                'position': 2,
            },
            {
                'playlist_id': 1,
                'track_id': 3213,
                'position': 3,
            },
            {
                'playlist_id': 1,
                'track_id': 3214,
                'position': 4,
            },
            {
                'playlist_id': 1,
                'track_id': 3216,
                'position': 5,
            },
        ]
        result = playlist_sort(self.playlist_tracks, 3217, 1)
        assert_that(result, equal_to(expected))

    def test_playlist_sort_out_of_range(self):
        result = playlist_sort(self.playlist_tracks, 3216, 99)
        assert_that(result, equal_to(self.playlist_tracks))
