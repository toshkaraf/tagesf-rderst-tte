# -*- coding: utf-8 -*-
from build_medieval_batches import SEED_ENTITIES
from medieval_entities_batch1 import BATCH1
from medieval_extra_concepts import EXTRA_CONCEPTS

_batch1_names = {e["name_de"] for e in BATCH1}
ENTITIES = BATCH1 + [e for e in SEED_ENTITIES if e["name_de"] not in _batch1_names]
