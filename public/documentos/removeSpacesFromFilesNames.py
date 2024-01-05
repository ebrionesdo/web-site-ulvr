#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Date: Dec 15, 2016


def replace_space_by_underscore(parent):
    """Replace whitespace by underscore in all files and folders.

    replaces    , - [ ] () __   ==>  underscore

    """
    import os
    for path, folders, files in os.walk(parent):
        # rename the files
        for f in files:
            old = os.path.join(path, f)
            bad_chars = [r' ', r',', r'-', r'&', r'[', r']', r'(', r')', r'__']
            for bad_char in bad_chars:
                if bad_char in f:
                    new = old.replace(bad_char, '_')
                    print(old, "==>", new)
                    os.rename(old, new)

        # rename the folders
        for i in range(len(folders)):
            new_name = folders[i].replace(' ', '_')
            bad_chars = [r' ', r',', r'-', r'&',
                         r'[', r']', r'(', r')', r'__']
            for bad_char in bad_chars:
                if bad_char in new_name:
                    new_name = new_name.replace(bad_char, '_')
                    print(folders[i], "==> ", new_name)
            old = os.path.join(path, folders[i])
            new = os.path.join(path, new_name)
            os.rename(old, new)
            folders[i] = new_name


if __name__ == "__main__":
    replace_space_by_underscore('.')