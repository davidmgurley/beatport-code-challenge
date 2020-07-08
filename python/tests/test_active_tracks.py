import unittest
import random

from hamcrest import assert_that, contains_inanyorder

from challenges.active_tracks import active_tracks


class TestActiveTracksClass(unittest.TestCase):

    NUM_TRACKS = 100

    @classmethod
    def setUpClass(cls):
        cls.tracks = [
            {
                'id': 1,
                'name': 'In Arms',
                'active': True,
            },
            {
                'id': 2,
                'name': 'Deep Dip',
                'active': False,
            },
            {
                'id': 3,
                'name': 'Panic Room',
                'active': True,
            },
        ]
        cls.tracks_dups = []
        cls.tracks_dups_ids = []
        for i in range(random.randrange(cls.NUM_TRACKS)):
            for i in range(random.randrange(cls.NUM_TRACKS)):
                track_id = i + 1
                active = random.choice([True, False])
                if active and track_id not in cls.tracks_dups_ids:
                    cls.tracks_dups_ids.append(track_id)
                cls.tracks_dups.append({
                    'name': 'track{}'.format(track_id),
                    'id': track_id,
                    'active': active
                })

    def test_active_tracks_returns_ids(self):
        result = active_tracks(self.tracks)
        assert_that(result, contains_inanyorder(*[1, 3]))

    def test_active_tracks_returns_ids_with_duplicates(self):
        result = active_tracks(self.tracks_dups)
        assert_that(result, contains_inanyorder(*self.tracks_dups_ids))
