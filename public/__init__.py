"""Frontend for NDX Tech."""
from pathlib import Path


def where() -> Path:
    """Return path to the frontend."""
    return Path(__file__).parent